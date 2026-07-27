import Midhem13EvoServersKeywordPage, { generateMetadata } from './midhem-13-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13EvoServersKeywordPage />;
}
