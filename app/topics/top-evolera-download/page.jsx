import TopEvoleraDownloadKeywordPage, { generateMetadata } from './top-evolera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoleraDownloadKeywordPage />;
}
