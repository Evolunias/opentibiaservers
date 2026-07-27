import RealMapTibiantisOpenTibiaKeywordPage, { generateMetadata } from './real-map-tibiantis-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiantisOpenTibiaKeywordPage />;
}
