import NewThaisotDownloadKeywordPage, { generateMetadata } from './new-thaisot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThaisotDownloadKeywordPage />;
}
