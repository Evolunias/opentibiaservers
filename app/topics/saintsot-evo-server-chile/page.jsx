import SaintsotEvoServerChileKeywordPage, { generateMetadata } from './saintsot-evo-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotEvoServerChileKeywordPage />;
}
