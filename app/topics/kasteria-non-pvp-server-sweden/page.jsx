import KasteriaNonPvpServerSwedenKeywordPage, { generateMetadata } from './kasteria-non-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaNonPvpServerSwedenKeywordPage />;
}
