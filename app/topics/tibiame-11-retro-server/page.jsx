import Tibiame11RetroServerKeywordPage, { generateMetadata } from './tibiame-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11RetroServerKeywordPage />;
}
