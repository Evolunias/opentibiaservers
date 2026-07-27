import RookgaardTalesRetroServerUsaKeywordPage, { generateMetadata } from './rookgaard-tales-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesRetroServerUsaKeywordPage />;
}
