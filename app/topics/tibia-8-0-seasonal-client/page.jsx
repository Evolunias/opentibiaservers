import Tibia80SeasonalClientKeywordPage, { generateMetadata } from './tibia-8-0-seasonal-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80SeasonalClientKeywordPage />;
}
