import CustomUnlineDownloadKeywordPage, { generateMetadata } from './custom-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineDownloadKeywordPage />;
}
