import Tibiascape11RetroServerKeywordPage, { generateMetadata } from './tibiascape-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape11RetroServerKeywordPage />;
}
