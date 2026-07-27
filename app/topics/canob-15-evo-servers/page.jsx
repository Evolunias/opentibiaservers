import Canob15EvoServersKeywordPage, { generateMetadata } from './canob-15-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15EvoServersKeywordPage />;
}
