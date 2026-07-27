import Classicus11EvoServersKeywordPage, { generateMetadata } from './classicus-11-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11EvoServersKeywordPage />;
}
