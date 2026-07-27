import Kasteria13RetroServerKeywordPage, { generateMetadata } from './kasteria-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria13RetroServerKeywordPage />;
}
