import Ameria11EvoServerKeywordPage, { generateMetadata } from './ameria-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria11EvoServerKeywordPage />;
}
