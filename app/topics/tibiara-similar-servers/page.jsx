import TibiaraSimilarServersKeywordPage, { generateMetadata } from './tibiara-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraSimilarServersKeywordPage />;
}
