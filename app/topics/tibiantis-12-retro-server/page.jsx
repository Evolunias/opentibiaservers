import Tibiantis12RetroServerKeywordPage, { generateMetadata } from './tibiantis-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis12RetroServerKeywordPage />;
}
