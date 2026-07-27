import TopRookgaardTalesOtsKeywordPage, { generateMetadata } from './top-rookgaard-tales-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRookgaardTalesOtsKeywordPage />;
}
