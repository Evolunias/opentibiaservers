import Luminera11EvoServerKeywordPage, { generateMetadata } from './luminera-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11EvoServerKeywordPage />;
}
