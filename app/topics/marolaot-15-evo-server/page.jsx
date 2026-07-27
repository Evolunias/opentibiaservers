import Marolaot15EvoServerKeywordPage, { generateMetadata } from './marolaot-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot15EvoServerKeywordPage />;
}
