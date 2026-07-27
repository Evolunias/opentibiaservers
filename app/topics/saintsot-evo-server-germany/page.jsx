import SaintsotEvoServerGermanyKeywordPage, { generateMetadata } from './saintsot-evo-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotEvoServerGermanyKeywordPage />;
}
