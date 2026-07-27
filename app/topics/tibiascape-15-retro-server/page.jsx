import Tibiascape15RetroServerKeywordPage, { generateMetadata } from './tibiascape-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15RetroServerKeywordPage />;
}
