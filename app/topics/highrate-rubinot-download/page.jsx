import HighrateRubinotDownloadKeywordPage, { generateMetadata } from './highrate-rubinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRubinotDownloadKeywordPage />;
}
