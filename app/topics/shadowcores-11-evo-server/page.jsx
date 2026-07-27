import Shadowcores11EvoServerKeywordPage, { generateMetadata } from './shadowcores-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11EvoServerKeywordPage />;
}
