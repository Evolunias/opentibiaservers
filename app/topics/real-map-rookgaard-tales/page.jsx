import RealMapRookgaardTalesKeywordPage, { generateMetadata } from './real-map-rookgaard-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRookgaardTalesKeywordPage />;
}
