import ActiveNilotDownloadKeywordPage, { generateMetadata } from './active-nilot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotDownloadKeywordPage />;
}
