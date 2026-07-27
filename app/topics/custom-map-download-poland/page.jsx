import CustomMapDownloadPolandKeywordPage, { generateMetadata } from './custom-map-download-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDownloadPolandKeywordPage />;
}
