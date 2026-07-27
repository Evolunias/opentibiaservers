import Luminera12EvoServerKeywordPage, { generateMetadata } from './luminera-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12EvoServerKeywordPage />;
}
