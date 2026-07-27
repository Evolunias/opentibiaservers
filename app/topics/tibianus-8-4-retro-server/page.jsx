import Tibianus84RetroServerKeywordPage, { generateMetadata } from './tibianus-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus84RetroServerKeywordPage />;
}
