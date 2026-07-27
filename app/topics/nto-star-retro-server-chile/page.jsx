import NtoStarRetroServerChileKeywordPage, { generateMetadata } from './nto-star-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRetroServerChileKeywordPage />;
}
