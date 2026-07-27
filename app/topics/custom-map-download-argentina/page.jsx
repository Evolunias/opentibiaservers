import CustomMapDownloadArgentinaKeywordPage, { generateMetadata } from './custom-map-download-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDownloadArgentinaKeywordPage />;
}
