import PvpeStatusChileKeywordPage, { generateMetadata } from './pvpe-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeStatusChileKeywordPage />;
}
