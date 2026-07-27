import RealMapRubinotTibiaKeywordPage, { generateMetadata } from './real-map-rubinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotTibiaKeywordPage />;
}
