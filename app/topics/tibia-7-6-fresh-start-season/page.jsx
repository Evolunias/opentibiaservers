import Tibia76FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-7-6-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76FreshStartSeasonKeywordPage />;
}
