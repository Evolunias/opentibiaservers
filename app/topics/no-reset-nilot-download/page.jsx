import NoResetNilotDownloadKeywordPage, { generateMetadata } from './no-reset-nilot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotDownloadKeywordPage />;
}
