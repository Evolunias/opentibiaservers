import RetroDownloadChileKeywordPage, { generateMetadata } from './retro-download-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDownloadChileKeywordPage />;
}
