import Luminera81EvoServerKeywordPage, { generateMetadata } from './luminera-8-1-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera81EvoServerKeywordPage />;
}
