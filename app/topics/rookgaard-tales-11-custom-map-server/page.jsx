import RookgaardTales11CustomMapServerKeywordPage, { generateMetadata } from './rookgaard-tales-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTales11CustomMapServerKeywordPage />;
}
