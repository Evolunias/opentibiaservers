import LowrateImperianicDownloadKeywordPage, { generateMetadata } from './lowrate-imperianic-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicDownloadKeywordPage />;
}
