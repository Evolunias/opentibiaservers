import TopThaisotDownloadKeywordPage, { generateMetadata } from './top-thaisot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotDownloadKeywordPage />;
}
