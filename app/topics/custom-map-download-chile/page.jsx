import CustomMapDownloadChileKeywordPage, { generateMetadata } from './custom-map-download-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDownloadChileKeywordPage />;
}
