import HighrateEvoleraDownloadKeywordPage, { generateMetadata } from './highrate-evolera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraDownloadKeywordPage />;
}
