import SabrehavenBossesKeywordPage, { generateMetadata } from './sabrehaven-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenBossesKeywordPage />;
}
