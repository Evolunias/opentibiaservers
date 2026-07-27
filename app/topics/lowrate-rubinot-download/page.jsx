import LowrateRubinotDownloadKeywordPage, { generateMetadata } from './lowrate-rubinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRubinotDownloadKeywordPage />;
}
