import CurrentCarlinotDownloadKeywordPage, { generateMetadata } from './current-carlinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotDownloadKeywordPage />;
}
