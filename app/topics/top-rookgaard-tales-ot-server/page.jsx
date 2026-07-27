import TopRookgaardTalesOtServerKeywordPage, { generateMetadata } from './top-rookgaard-tales-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRookgaardTalesOtServerKeywordPage />;
}
