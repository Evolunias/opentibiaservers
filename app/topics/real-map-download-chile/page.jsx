import RealMapDownloadChileKeywordPage, { generateMetadata } from './real-map-download-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDownloadChileKeywordPage />;
}
