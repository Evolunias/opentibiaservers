import BestRookgaardTalesOtServerKeywordPage, { generateMetadata } from './best-rookgaard-tales-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRookgaardTalesOtServerKeywordPage />;
}
