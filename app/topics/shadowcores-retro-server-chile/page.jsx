import ShadowcoresRetroServerChileKeywordPage, { generateMetadata } from './shadowcores-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresRetroServerChileKeywordPage />;
}
