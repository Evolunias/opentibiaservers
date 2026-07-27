import RealMapRookgaardTalesTibiaKeywordPage, { generateMetadata } from './real-map-rookgaard-tales-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRookgaardTalesTibiaKeywordPage />;
}
