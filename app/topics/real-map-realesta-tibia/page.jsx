import RealMapRealestaTibiaKeywordPage, { generateMetadata } from './real-map-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRealestaTibiaKeywordPage />;
}
