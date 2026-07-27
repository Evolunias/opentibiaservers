import RookgaardTalesCanadaServerKeywordPage, { generateMetadata } from './rookgaard-tales-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesCanadaServerKeywordPage />;
}
