import RookgaardTales11RetroServerKeywordPage, { generateMetadata } from './rookgaard-tales-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales11RetroServerKeywordPage />;
}
