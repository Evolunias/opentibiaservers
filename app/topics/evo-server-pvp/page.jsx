import EvoServerPvpKeywordPage, { generateMetadata } from './evo-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerPvpKeywordPage />;
}
