import NtoStarEvoServerChileKeywordPage, { generateMetadata } from './nto-star-evo-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarEvoServerChileKeywordPage />;
}
