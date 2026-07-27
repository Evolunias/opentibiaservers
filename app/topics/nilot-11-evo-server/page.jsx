import Nilot11EvoServerKeywordPage, { generateMetadata } from './nilot-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot11EvoServerKeywordPage />;
}
