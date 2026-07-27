import CurrentEvoleraDownloadKeywordPage, { generateMetadata } from './current-evolera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoleraDownloadKeywordPage />;
}
