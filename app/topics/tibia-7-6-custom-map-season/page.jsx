import Tibia76CustomMapSeasonKeywordPage, { generateMetadata } from './tibia-7-6-custom-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76CustomMapSeasonKeywordPage />;
}
