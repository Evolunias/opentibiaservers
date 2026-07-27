import Tibia15BaiakSeasonKeywordPage, { generateMetadata } from './tibia-15-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15BaiakSeasonKeywordPage />;
}
