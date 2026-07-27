import RealMapImperianicTibiaKeywordPage, { generateMetadata } from './real-map-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapImperianicTibiaKeywordPage />;
}
