import ArcaniarlRetroServerChileKeywordPage, { generateMetadata } from './arcaniarl-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlRetroServerChileKeywordPage />;
}
