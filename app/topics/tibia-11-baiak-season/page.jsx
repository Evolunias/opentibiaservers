import Tibia11BaiakSeasonKeywordPage, { generateMetadata } from './tibia-11-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakSeasonKeywordPage />;
}
