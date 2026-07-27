import CoxaotBossesKeywordPage, { generateMetadata } from './coxaot-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotBossesKeywordPage />;
}
