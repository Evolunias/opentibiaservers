import PvpeServerListChileKeywordPage, { generateMetadata } from './pvpe-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerListChileKeywordPage />;
}
