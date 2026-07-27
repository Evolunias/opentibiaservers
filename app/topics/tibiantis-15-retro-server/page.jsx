import Tibiantis15RetroServerKeywordPage, { generateMetadata } from './tibiantis-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis15RetroServerKeywordPage />;
}
