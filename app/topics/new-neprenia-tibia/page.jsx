import NewNepreniaTibiaKeywordPage, { generateMetadata } from './new-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaTibiaKeywordPage />;
}
