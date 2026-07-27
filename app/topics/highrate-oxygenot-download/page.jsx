import HighrateOxygenotDownloadKeywordPage, { generateMetadata } from './highrate-oxygenot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOxygenotDownloadKeywordPage />;
}
