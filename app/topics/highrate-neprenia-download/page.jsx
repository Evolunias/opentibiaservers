import HighrateNepreniaDownloadKeywordPage, { generateMetadata } from './highrate-neprenia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaDownloadKeywordPage />;
}
