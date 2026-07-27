import Tibia12BaiakSeasonKeywordPage, { generateMetadata } from './tibia-12-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12BaiakSeasonKeywordPage />;
}
