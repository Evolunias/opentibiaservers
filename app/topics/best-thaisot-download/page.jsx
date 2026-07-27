import BestThaisotDownloadKeywordPage, { generateMetadata } from './best-thaisot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotDownloadKeywordPage />;
}
