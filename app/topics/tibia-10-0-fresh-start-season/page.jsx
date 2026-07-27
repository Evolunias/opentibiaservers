import Tibia100FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-10-0-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100FreshStartSeasonKeywordPage />;
}
