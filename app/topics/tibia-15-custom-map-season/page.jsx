import Tibia15CustomMapSeasonKeywordPage, { generateMetadata } from './tibia-15-custom-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15CustomMapSeasonKeywordPage />;
}
