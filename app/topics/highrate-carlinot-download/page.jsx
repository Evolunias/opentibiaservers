import HighrateCarlinotDownloadKeywordPage, { generateMetadata } from './highrate-carlinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotDownloadKeywordPage />;
}
