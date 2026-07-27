import Blazera12EvoServerKeywordPage, { generateMetadata } from './blazera-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera12EvoServerKeywordPage />;
}
