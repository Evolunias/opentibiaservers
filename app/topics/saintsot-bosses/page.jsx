import SaintsotBossesKeywordPage, { generateMetadata } from './saintsot-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotBossesKeywordPage />;
}
