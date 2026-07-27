import Tibia86SeasonalServerListKeywordPage, { generateMetadata } from './tibia-8-6-seasonal-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86SeasonalServerListKeywordPage />;
}
