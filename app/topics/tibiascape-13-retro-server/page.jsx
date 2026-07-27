import Tibiascape13RetroServerKeywordPage, { generateMetadata } from './tibiascape-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13RetroServerKeywordPage />;
}
