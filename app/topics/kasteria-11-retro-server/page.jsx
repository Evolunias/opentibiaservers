import Kasteria11RetroServerKeywordPage, { generateMetadata } from './kasteria-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11RetroServerKeywordPage />;
}
