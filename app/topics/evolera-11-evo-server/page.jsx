import Evolera11EvoServerKeywordPage, { generateMetadata } from './evolera-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera11EvoServerKeywordPage />;
}
