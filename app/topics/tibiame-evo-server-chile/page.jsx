import TibiameEvoServerChileKeywordPage, { generateMetadata } from './tibiame-evo-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameEvoServerChileKeywordPage />;
}
