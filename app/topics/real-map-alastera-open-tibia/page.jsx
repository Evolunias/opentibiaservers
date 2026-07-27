import RealMapAlasteraOpenTibiaKeywordPage, { generateMetadata } from './real-map-alastera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraOpenTibiaKeywordPage />;
}
