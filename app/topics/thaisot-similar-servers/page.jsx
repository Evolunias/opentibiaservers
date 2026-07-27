import ThaisotSimilarServersKeywordPage, { generateMetadata } from './thaisot-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotSimilarServersKeywordPage />;
}
