import Tibia80SeasonalServerListKeywordPage, { generateMetadata } from './tibia-8-0-seasonal-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80SeasonalServerListKeywordPage />;
}
