import Tibia11FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-11-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11FreshStartSeasonKeywordPage />;
}
