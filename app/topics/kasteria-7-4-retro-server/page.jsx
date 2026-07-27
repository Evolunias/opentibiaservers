import Kasteria74RetroServerKeywordPage, { generateMetadata } from './kasteria-7-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria74RetroServerKeywordPage />;
}
