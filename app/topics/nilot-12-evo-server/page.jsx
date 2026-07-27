import Nilot12EvoServerKeywordPage, { generateMetadata } from './nilot-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot12EvoServerKeywordPage />;
}
