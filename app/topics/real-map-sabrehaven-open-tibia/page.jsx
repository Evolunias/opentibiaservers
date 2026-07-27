import RealMapSabrehavenOpenTibiaKeywordPage, { generateMetadata } from './real-map-sabrehaven-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenOpenTibiaKeywordPage />;
}
