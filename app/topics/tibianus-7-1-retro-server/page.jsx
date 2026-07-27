import Tibianus71RetroServerKeywordPage, { generateMetadata } from './tibianus-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus71RetroServerKeywordPage />;
}
