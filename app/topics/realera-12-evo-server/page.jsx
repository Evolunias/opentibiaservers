import Realera12EvoServerKeywordPage, { generateMetadata } from './realera-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera12EvoServerKeywordPage />;
}
