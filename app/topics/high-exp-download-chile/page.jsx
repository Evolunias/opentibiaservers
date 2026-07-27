import HighExpDownloadChileKeywordPage, { generateMetadata } from './high-exp-download-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpDownloadChileKeywordPage />;
}
