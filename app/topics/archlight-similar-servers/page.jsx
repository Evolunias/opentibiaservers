import ArchlightSimilarServersKeywordPage, { generateMetadata } from './archlight-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightSimilarServersKeywordPage />;
}
