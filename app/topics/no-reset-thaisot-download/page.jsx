import NoResetThaisotDownloadKeywordPage, { generateMetadata } from './no-reset-thaisot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThaisotDownloadKeywordPage />;
}
