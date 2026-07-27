import Tibia96FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-9-6-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96FreshStartSeasonKeywordPage />;
}
