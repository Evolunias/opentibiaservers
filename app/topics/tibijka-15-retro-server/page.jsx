import Tibijka15RetroServerKeywordPage, { generateMetadata } from './tibijka-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka15RetroServerKeywordPage />;
}
