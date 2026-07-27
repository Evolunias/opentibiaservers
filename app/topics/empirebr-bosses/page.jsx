import EmpirebrBossesKeywordPage, { generateMetadata } from './empirebr-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrBossesKeywordPage />;
}
