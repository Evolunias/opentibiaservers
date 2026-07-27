import Tibia12FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-12-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12FreshStartSeasonKeywordPage />;
}
