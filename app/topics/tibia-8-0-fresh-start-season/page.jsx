import Tibia80FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-8-0-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80FreshStartSeasonKeywordPage />;
}
