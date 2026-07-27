import Luminera80EvoServerKeywordPage, { generateMetadata } from './luminera-8-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80EvoServerKeywordPage />;
}
