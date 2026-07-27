import NeranaTibiaKeywordPage, { generateMetadata } from './nerana-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeranaTibiaKeywordPage />;
}
