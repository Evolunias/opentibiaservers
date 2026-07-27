import Kasteria11EvoServersKeywordPage, { generateMetadata } from './kasteria-11-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11EvoServersKeywordPage />;
}
