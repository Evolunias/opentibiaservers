import RealMapSabrehavenTibiaKeywordPage, { generateMetadata } from './real-map-sabrehaven-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenTibiaKeywordPage />;
}
