import RealMapRookgaardTalesServerKeywordPage, { generateMetadata } from './real-map-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRookgaardTalesServerKeywordPage />;
}
