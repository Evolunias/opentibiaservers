import Tibianus13RetroServerKeywordPage, { generateMetadata } from './tibianus-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus13RetroServerKeywordPage />;
}
