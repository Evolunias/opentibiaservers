import Tibia80CustomMapSeasonKeywordPage, { generateMetadata } from './tibia-8-0-custom-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80CustomMapSeasonKeywordPage />;
}
