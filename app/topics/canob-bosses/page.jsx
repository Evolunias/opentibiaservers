import CanobBossesKeywordPage, { generateMetadata } from './canob-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobBossesKeywordPage />;
}
