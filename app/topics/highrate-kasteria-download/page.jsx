import HighrateKasteriaDownloadKeywordPage, { generateMetadata } from './highrate-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaDownloadKeywordPage />;
}
