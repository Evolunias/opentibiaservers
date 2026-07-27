import Tibia11CustomMapSeasonKeywordPage, { generateMetadata } from './tibia-11-custom-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapSeasonKeywordPage />;
}
