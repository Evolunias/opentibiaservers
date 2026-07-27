import Tibia854SeasonalServerListKeywordPage, { generateMetadata } from './tibia-8-54-seasonal-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854SeasonalServerListKeywordPage />;
}
