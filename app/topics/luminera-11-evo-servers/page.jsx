import Luminera11EvoServersKeywordPage, { generateMetadata } from './luminera-11-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11EvoServersKeywordPage />;
}
