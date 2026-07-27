import Kasteria15RetroServerKeywordPage, { generateMetadata } from './kasteria-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria15RetroServerKeywordPage />;
}
