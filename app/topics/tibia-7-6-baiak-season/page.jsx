import Tibia76BaiakSeasonKeywordPage, { generateMetadata } from './tibia-7-6-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76BaiakSeasonKeywordPage />;
}
