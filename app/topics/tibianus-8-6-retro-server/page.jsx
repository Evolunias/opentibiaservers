import Tibianus86RetroServerKeywordPage, { generateMetadata } from './tibianus-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus86RetroServerKeywordPage />;
}
