import Tibia81FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-8-1-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81FreshStartSeasonKeywordPage />;
}
