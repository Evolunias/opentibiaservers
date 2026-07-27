import Tibia86FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-8-6-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86FreshStartSeasonKeywordPage />;
}
