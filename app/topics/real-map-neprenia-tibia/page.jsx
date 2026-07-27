import RealMapNepreniaTibiaKeywordPage, { generateMetadata } from './real-map-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaTibiaKeywordPage />;
}
