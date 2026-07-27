import CustomMapDownloadSwedenKeywordPage, { generateMetadata } from './custom-map-download-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDownloadSwedenKeywordPage />;
}
