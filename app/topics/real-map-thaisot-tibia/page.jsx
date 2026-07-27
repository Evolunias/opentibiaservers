import RealMapThaisotTibiaKeywordPage, { generateMetadata } from './real-map-thaisot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotTibiaKeywordPage />;
}
