import Nilot15EvoServerKeywordPage, { generateMetadata } from './nilot-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot15EvoServerKeywordPage />;
}
