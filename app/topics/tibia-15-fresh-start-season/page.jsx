import Tibia15FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-15-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15FreshStartSeasonKeywordPage />;
}
