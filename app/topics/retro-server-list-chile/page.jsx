import RetroServerListChileKeywordPage, { generateMetadata } from './retro-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServerListChileKeywordPage />;
}
