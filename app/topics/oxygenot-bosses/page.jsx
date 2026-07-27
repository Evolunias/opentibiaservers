import OxygenotBossesKeywordPage, { generateMetadata } from './oxygenot-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotBossesKeywordPage />;
}
