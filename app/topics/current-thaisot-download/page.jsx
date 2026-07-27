import CurrentThaisotDownloadKeywordPage, { generateMetadata } from './current-thaisot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThaisotDownloadKeywordPage />;
}
