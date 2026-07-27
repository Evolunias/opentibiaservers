import Canob11EvoServersKeywordPage, { generateMetadata } from './canob-11-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11EvoServersKeywordPage />;
}
