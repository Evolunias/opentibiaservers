import Tibianus80RetroServerKeywordPage, { generateMetadata } from './tibianus-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus80RetroServerKeywordPage />;
}
