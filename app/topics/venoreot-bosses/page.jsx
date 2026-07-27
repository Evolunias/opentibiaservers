import VenoreotBossesKeywordPage, { generateMetadata } from './venoreot-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotBossesKeywordPage />;
}
