import CustomMapDownloadEuropeKeywordPage, { generateMetadata } from './custom-map-download-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDownloadEuropeKeywordPage />;
}
