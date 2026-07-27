import Kasteria81RetroServerKeywordPage, { generateMetadata } from './kasteria-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria81RetroServerKeywordPage />;
}
