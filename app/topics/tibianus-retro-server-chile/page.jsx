import TibianusRetroServerChileKeywordPage, { generateMetadata } from './tibianus-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusRetroServerChileKeywordPage />;
}
