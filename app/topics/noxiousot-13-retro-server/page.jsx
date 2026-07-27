import Noxiousot13RetroServerKeywordPage, { generateMetadata } from './noxiousot-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot13RetroServerKeywordPage />;
}
