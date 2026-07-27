import PvpeDownloadChileKeywordPage, { generateMetadata } from './pvpe-download-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDownloadChileKeywordPage />;
}
