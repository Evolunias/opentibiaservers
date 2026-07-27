import HighrateAlasteraDownloadKeywordPage, { generateMetadata } from './highrate-alastera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraDownloadKeywordPage />;
}
