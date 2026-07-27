import Kasteria71RetroServerKeywordPage, { generateMetadata } from './kasteria-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria71RetroServerKeywordPage />;
}
