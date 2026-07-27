import NewRookgaardTalesOtKeywordPage, { generateMetadata } from './new-rookgaard-tales-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRookgaardTalesOtKeywordPage />;
}
