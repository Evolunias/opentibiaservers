import Thornia11EvoServersKeywordPage, { generateMetadata } from './thornia-11-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11EvoServersKeywordPage />;
}
