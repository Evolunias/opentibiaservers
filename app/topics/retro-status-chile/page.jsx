import RetroStatusChileKeywordPage, { generateMetadata } from './retro-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroStatusChileKeywordPage />;
}
