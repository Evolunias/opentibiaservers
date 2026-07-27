import TibiaraEvoServerChileKeywordPage, { generateMetadata } from './tibiara-evo-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraEvoServerChileKeywordPage />;
}
