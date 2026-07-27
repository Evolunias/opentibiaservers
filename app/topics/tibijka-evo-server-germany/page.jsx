import TibijkaEvoServerGermanyKeywordPage, { generateMetadata } from './tibijka-evo-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaEvoServerGermanyKeywordPage />;
}
