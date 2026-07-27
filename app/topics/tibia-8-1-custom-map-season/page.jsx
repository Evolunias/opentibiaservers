import Tibia81CustomMapSeasonKeywordPage, { generateMetadata } from './tibia-8-1-custom-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81CustomMapSeasonKeywordPage />;
}
