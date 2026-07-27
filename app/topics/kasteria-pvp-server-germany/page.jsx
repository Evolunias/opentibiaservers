import KasteriaPvpServerGermanyKeywordPage, { generateMetadata } from './kasteria-pvp-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPvpServerGermanyKeywordPage />;
}
