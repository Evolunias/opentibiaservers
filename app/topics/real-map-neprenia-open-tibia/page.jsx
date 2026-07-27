import RealMapNepreniaOpenTibiaKeywordPage, { generateMetadata } from './real-map-neprenia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaOpenTibiaKeywordPage />;
}
