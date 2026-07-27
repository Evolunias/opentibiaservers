import HighrateUnlineDownloadKeywordPage, { generateMetadata } from './highrate-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateUnlineDownloadKeywordPage />;
}
