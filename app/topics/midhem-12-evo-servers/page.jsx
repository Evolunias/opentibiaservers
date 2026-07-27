import Midhem12EvoServersKeywordPage, { generateMetadata } from './midhem-12-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12EvoServersKeywordPage />;
}
