import Tibia13BaiakSeasonKeywordPage, { generateMetadata } from './tibia-13-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakSeasonKeywordPage />;
}
