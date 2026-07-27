import RookgaardTalesOtKeywordPage, { generateMetadata } from './rookgaard-tales-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesOtKeywordPage />;
}
