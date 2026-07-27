import LowrateRealestaDownloadKeywordPage, { generateMetadata } from './lowrate-realesta-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaDownloadKeywordPage />;
}
