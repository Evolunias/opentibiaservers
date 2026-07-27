import Venoreot11EvoServerKeywordPage, { generateMetadata } from './venoreot-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot11EvoServerKeywordPage />;
}
