import RealestaEvoServerGermanyKeywordPage, { generateMetadata } from './realesta-evo-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaEvoServerGermanyKeywordPage />;
}
