import Tibia86BaiakSeasonKeywordPage, { generateMetadata } from './tibia-8-6-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86BaiakSeasonKeywordPage />;
}
