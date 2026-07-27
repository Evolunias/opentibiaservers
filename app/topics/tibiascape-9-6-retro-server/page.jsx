import Tibiascape96RetroServerKeywordPage, { generateMetadata } from './tibiascape-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape96RetroServerKeywordPage />;
}
