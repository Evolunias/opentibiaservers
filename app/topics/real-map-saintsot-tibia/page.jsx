import RealMapSaintsotTibiaKeywordPage, { generateMetadata } from './real-map-saintsot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSaintsotTibiaKeywordPage />;
}
