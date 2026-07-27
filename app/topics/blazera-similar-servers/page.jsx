import BlazeraSimilarServersKeywordPage, { generateMetadata } from './blazera-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraSimilarServersKeywordPage />;
}
