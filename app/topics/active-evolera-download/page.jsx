import ActiveEvoleraDownloadKeywordPage, { generateMetadata } from './active-evolera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraDownloadKeywordPage />;
}
