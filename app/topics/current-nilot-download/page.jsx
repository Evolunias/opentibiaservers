import CurrentNilotDownloadKeywordPage, { generateMetadata } from './current-nilot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNilotDownloadKeywordPage />;
}
