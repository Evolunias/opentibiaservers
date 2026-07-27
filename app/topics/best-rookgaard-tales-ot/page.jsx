import BestRookgaardTalesOtKeywordPage, { generateMetadata } from './best-rookgaard-tales-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRookgaardTalesOtKeywordPage />;
}
