import OfficialRookgaardTalesOtServerKeywordPage, { generateMetadata } from './official-rookgaard-tales-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRookgaardTalesOtServerKeywordPage />;
}
