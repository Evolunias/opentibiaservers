import CustomEvoleraDownloadKeywordPage, { generateMetadata } from './custom-evolera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraDownloadKeywordPage />;
}
