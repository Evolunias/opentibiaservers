import Tibia14FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-14-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14FreshStartSeasonKeywordPage />;
}
