import ImperianicBossesKeywordPage, { generateMetadata } from './imperianic-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicBossesKeywordPage />;
}
