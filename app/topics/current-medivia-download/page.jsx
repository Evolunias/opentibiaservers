import CurrentMediviaDownloadKeywordPage, { generateMetadata } from './current-medivia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaDownloadKeywordPage />;
}
