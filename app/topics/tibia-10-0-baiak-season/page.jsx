import Tibia100BaiakSeasonKeywordPage, { generateMetadata } from './tibia-10-0-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100BaiakSeasonKeywordPage />;
}
