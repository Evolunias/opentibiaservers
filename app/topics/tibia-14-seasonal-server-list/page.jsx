import Tibia14SeasonalServerListKeywordPage, { generateMetadata } from './tibia-14-seasonal-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalServerListKeywordPage />;
}
