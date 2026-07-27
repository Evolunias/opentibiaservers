import RookgaardTales15RetroServerKeywordPage, { generateMetadata } from './rookgaard-tales-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales15RetroServerKeywordPage />;
}
