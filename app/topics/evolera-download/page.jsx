import EvoleraDownloadKeywordPage, { generateMetadata } from './evolera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraDownloadKeywordPage />;
}
