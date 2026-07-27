import Tibia1098BaiakSeasonKeywordPage, { generateMetadata } from './tibia-10-98-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098BaiakSeasonKeywordPage />;
}
