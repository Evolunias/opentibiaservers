import Tibia84CustomMapSeasonKeywordPage, { generateMetadata } from './tibia-8-4-custom-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84CustomMapSeasonKeywordPage />;
}
