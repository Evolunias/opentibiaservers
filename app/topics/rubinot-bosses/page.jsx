import RubinotBossesKeywordPage, { generateMetadata } from './rubinot-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotBossesKeywordPage />;
}
