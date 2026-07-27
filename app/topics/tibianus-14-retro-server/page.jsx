import Tibianus14RetroServerKeywordPage, { generateMetadata } from './tibianus-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus14RetroServerKeywordPage />;
}
