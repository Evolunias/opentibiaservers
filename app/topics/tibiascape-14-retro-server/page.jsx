import Tibiascape14RetroServerKeywordPage, { generateMetadata } from './tibiascape-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape14RetroServerKeywordPage />;
}
