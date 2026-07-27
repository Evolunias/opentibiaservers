import Oldera81RetroServerKeywordPage, { generateMetadata } from './oldera-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera81RetroServerKeywordPage />;
}
