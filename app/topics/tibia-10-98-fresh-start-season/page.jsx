import Tibia1098FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-10-98-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098FreshStartSeasonKeywordPage />;
}
