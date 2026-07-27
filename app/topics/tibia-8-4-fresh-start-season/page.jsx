import Tibia84FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-8-4-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84FreshStartSeasonKeywordPage />;
}
