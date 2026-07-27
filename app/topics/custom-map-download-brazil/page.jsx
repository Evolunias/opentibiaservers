import CustomMapDownloadBrazilKeywordPage, { generateMetadata } from './custom-map-download-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDownloadBrazilKeywordPage />;
}
