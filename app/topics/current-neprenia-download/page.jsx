import CurrentNepreniaDownloadKeywordPage, { generateMetadata } from './current-neprenia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNepreniaDownloadKeywordPage />;
}
