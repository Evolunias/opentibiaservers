import RealMapMarolaotTibiaKeywordPage, { generateMetadata } from './real-map-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMarolaotTibiaKeywordPage />;
}
