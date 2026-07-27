import Tibia80SeasonalStatusKeywordPage, { generateMetadata } from './tibia-8-0-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80SeasonalStatusKeywordPage />;
}
