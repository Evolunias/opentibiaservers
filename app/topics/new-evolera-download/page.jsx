import NewEvoleraDownloadKeywordPage, { generateMetadata } from './new-evolera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraDownloadKeywordPage />;
}
