import InfernalOtBossesKeywordPage, { generateMetadata } from './infernal-ot-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtBossesKeywordPage />;
}
