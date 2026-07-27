import Tibiascape80RetroServerKeywordPage, { generateMetadata } from './tibiascape-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape80RetroServerKeywordPage />;
}
