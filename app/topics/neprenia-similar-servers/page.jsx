import NepreniaSimilarServersKeywordPage, { generateMetadata } from './neprenia-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSimilarServersKeywordPage />;
}
