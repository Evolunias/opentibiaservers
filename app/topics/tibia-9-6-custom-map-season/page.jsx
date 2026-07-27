import Tibia96CustomMapSeasonKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapSeasonKeywordPage />;
}
