import ShadowcoresEvoServerChileKeywordPage, { generateMetadata } from './shadowcores-evo-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresEvoServerChileKeywordPage />;
}
