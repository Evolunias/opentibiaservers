import Evolera12EvoServerKeywordPage, { generateMetadata } from './evolera-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera12EvoServerKeywordPage />;
}
