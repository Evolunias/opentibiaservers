import Tibia13FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-13-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13FreshStartSeasonKeywordPage />;
}
