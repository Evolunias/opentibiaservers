import TopRookgaardTalesOtKeywordPage, { generateMetadata } from './top-rookgaard-tales-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRookgaardTalesOtKeywordPage />;
}
