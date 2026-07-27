import LowrateNepreniaDownloadKeywordPage, { generateMetadata } from './lowrate-neprenia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNepreniaDownloadKeywordPage />;
}
