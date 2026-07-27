import CurrentRookgaardTalesOtServerKeywordPage, { generateMetadata } from './current-rookgaard-tales-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRookgaardTalesOtServerKeywordPage />;
}
