import RealMapTibiantisTibiaKeywordPage, { generateMetadata } from './real-map-tibiantis-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiantisTibiaKeywordPage />;
}
