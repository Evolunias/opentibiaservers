import Tibia14CustomMapSeasonKeywordPage, { generateMetadata } from './tibia-14-custom-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapSeasonKeywordPage />;
}
