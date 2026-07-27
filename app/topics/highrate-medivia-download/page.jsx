import HighrateMediviaDownloadKeywordPage, { generateMetadata } from './highrate-medivia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaDownloadKeywordPage />;
}
