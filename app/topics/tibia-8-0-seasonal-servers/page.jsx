import Tibia80SeasonalServersKeywordPage, { generateMetadata } from './tibia-8-0-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80SeasonalServersKeywordPage />;
}
