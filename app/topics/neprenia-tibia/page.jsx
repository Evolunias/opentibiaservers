import NepreniaTibiaKeywordPage, { generateMetadata } from './neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaTibiaKeywordPage />;
}
