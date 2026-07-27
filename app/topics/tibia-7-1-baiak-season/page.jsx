import Tibia71BaiakSeasonKeywordPage, { generateMetadata } from './tibia-7-1-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71BaiakSeasonKeywordPage />;
}
