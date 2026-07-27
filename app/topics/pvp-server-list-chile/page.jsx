import PvpServerListChileKeywordPage, { generateMetadata } from './pvp-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServerListChileKeywordPage />;
}
