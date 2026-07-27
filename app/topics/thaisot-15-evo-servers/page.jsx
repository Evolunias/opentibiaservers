import Thaisot15EvoServersKeywordPage, { generateMetadata } from './thaisot-15-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15EvoServersKeywordPage />;
}
