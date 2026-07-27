import CustomMapDownloadSouthAmericaKeywordPage, { generateMetadata } from './custom-map-download-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDownloadSouthAmericaKeywordPage />;
}
