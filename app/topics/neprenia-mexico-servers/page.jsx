import NepreniaMexicoServersKeywordPage, { generateMetadata } from './neprenia-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaMexicoServersKeywordPage />;
}
