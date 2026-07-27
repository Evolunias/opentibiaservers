import TibiascapeRetroServerChileKeywordPage, { generateMetadata } from './tibiascape-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeRetroServerChileKeywordPage />;
}
