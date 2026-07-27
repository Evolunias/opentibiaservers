import LowExpDownloadChileKeywordPage, { generateMetadata } from './low-exp-download-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDownloadChileKeywordPage />;
}
