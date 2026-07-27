import Tibia81BaiakSeasonKeywordPage, { generateMetadata } from './tibia-8-1-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81BaiakSeasonKeywordPage />;
}
