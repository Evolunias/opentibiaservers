import Tibia14BaiakSeasonKeywordPage, { generateMetadata } from './tibia-14-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14BaiakSeasonKeywordPage />;
}
