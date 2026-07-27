import NonPvpDownloadChileKeywordPage, { generateMetadata } from './non-pvp-download-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDownloadChileKeywordPage />;
}
