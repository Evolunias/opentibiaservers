import Tibianus12RetroServerKeywordPage, { generateMetadata } from './tibianus-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus12RetroServerKeywordPage />;
}
