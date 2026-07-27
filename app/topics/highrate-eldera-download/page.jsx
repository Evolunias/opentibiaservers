import HighrateElderaDownloadKeywordPage, { generateMetadata } from './highrate-eldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateElderaDownloadKeywordPage />;
}
