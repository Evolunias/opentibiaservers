import CustomMapDownloadCanadaKeywordPage, { generateMetadata } from './custom-map-download-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDownloadCanadaKeywordPage />;
}
