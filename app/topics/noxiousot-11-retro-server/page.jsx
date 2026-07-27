import Noxiousot11RetroServerKeywordPage, { generateMetadata } from './noxiousot-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot11RetroServerKeywordPage />;
}
