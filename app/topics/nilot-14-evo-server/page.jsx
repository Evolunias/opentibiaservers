import Nilot14EvoServerKeywordPage, { generateMetadata } from './nilot-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot14EvoServerKeywordPage />;
}
