import Luminera15EvoServersKeywordPage, { generateMetadata } from './luminera-15-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15EvoServersKeywordPage />;
}
