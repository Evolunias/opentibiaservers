import Tibiascape71RetroServerKeywordPage, { generateMetadata } from './tibiascape-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape71RetroServerKeywordPage />;
}
