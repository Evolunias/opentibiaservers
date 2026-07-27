import Tibiantis13RetroServerKeywordPage, { generateMetadata } from './tibiantis-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis13RetroServerKeywordPage />;
}
