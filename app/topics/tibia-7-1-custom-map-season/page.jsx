import Tibia71CustomMapSeasonKeywordPage, { generateMetadata } from './tibia-7-1-custom-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71CustomMapSeasonKeywordPage />;
}
