import Nilot13EvoServerKeywordPage, { generateMetadata } from './nilot-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot13EvoServerKeywordPage />;
}
