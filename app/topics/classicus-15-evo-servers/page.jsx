import Classicus15EvoServersKeywordPage, { generateMetadata } from './classicus-15-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15EvoServersKeywordPage />;
}
