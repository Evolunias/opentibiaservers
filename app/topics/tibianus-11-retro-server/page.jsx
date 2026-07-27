import Tibianus11RetroServerKeywordPage, { generateMetadata } from './tibianus-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus11RetroServerKeywordPage />;
}
