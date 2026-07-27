import Noxiousot15RetroServerKeywordPage, { generateMetadata } from './noxiousot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot15RetroServerKeywordPage />;
}
