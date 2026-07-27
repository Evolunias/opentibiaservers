import Tibiascape81RetroServerKeywordPage, { generateMetadata } from './tibiascape-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape81RetroServerKeywordPage />;
}
