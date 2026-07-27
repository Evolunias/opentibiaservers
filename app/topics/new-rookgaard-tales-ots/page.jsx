import NewRookgaardTalesOtsKeywordPage, { generateMetadata } from './new-rookgaard-tales-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRookgaardTalesOtsKeywordPage />;
}
