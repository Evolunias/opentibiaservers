import HighrateRealestaDownloadKeywordPage, { generateMetadata } from './highrate-realesta-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealestaDownloadKeywordPage />;
}
