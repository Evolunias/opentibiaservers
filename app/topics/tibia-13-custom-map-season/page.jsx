import Tibia13CustomMapSeasonKeywordPage, { generateMetadata } from './tibia-13-custom-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapSeasonKeywordPage />;
}
