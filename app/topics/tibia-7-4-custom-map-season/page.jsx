import Tibia74CustomMapSeasonKeywordPage, { generateMetadata } from './tibia-7-4-custom-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74CustomMapSeasonKeywordPage />;
}
