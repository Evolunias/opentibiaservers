import Tibiascape12RetroServerKeywordPage, { generateMetadata } from './tibiascape-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12RetroServerKeywordPage />;
}
