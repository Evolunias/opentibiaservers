import RookgaardTalesOtServerKeywordPage, { generateMetadata } from './rookgaard-tales-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesOtServerKeywordPage />;
}
