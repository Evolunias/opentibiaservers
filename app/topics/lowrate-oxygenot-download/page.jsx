import LowrateOxygenotDownloadKeywordPage, { generateMetadata } from './lowrate-oxygenot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOxygenotDownloadKeywordPage />;
}
