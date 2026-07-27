import PvpStatusChileKeywordPage, { generateMetadata } from './pvp-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpStatusChileKeywordPage />;
}
