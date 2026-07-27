import MidhemSimilarServersKeywordPage, { generateMetadata } from './midhem-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemSimilarServersKeywordPage />;
}
