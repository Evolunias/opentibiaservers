import Noxiousot11EvoServerKeywordPage, { generateMetadata } from './noxiousot-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot11EvoServerKeywordPage />;
}
