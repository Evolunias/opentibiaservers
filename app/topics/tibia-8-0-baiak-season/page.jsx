import Tibia80BaiakSeasonKeywordPage, { generateMetadata } from './tibia-8-0-baiak-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80BaiakSeasonKeywordPage />;
}
