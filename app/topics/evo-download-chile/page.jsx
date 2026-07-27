import EvoDownloadChileKeywordPage, { generateMetadata } from './evo-download-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDownloadChileKeywordPage />;
}
