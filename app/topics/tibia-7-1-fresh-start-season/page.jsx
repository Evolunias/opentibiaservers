import Tibia71FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-7-1-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71FreshStartSeasonKeywordPage />;
}
