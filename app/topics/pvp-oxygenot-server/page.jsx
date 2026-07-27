import PvpOxygenotServerKeywordPage, { generateMetadata } from './pvp-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOxygenotServerKeywordPage />;
}
