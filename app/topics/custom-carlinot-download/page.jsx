import CustomCarlinotDownloadKeywordPage, { generateMetadata } from './custom-carlinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotDownloadKeywordPage />;
}
