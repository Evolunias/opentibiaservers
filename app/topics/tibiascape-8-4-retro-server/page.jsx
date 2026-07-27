import Tibiascape84RetroServerKeywordPage, { generateMetadata } from './tibiascape-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape84RetroServerKeywordPage />;
}
