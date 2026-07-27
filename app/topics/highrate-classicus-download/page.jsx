import HighrateClassicusDownloadKeywordPage, { generateMetadata } from './highrate-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusDownloadKeywordPage />;
}
