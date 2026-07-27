import RookgaardTalesRetroServerFranceKeywordPage, { generateMetadata } from './rookgaard-tales-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesRetroServerFranceKeywordPage />;
}
