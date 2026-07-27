import Tibiantis11RetroServerKeywordPage, { generateMetadata } from './tibiantis-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis11RetroServerKeywordPage />;
}
