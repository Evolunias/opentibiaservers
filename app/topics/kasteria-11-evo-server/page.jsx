import Kasteria11EvoServerKeywordPage, { generateMetadata } from './kasteria-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11EvoServerKeywordPage />;
}
