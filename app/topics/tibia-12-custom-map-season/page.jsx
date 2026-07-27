import Tibia12CustomMapSeasonKeywordPage, { generateMetadata } from './tibia-12-custom-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapSeasonKeywordPage />;
}
