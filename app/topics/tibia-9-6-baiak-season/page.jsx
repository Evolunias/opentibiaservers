import Tibia96BaiakSeasonKeywordPage, { generateMetadata } from './tibia-9-6-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96BaiakSeasonKeywordPage />;
}
