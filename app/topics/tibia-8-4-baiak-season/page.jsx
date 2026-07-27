import Tibia84BaiakSeasonKeywordPage, { generateMetadata } from './tibia-8-4-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84BaiakSeasonKeywordPage />;
}
