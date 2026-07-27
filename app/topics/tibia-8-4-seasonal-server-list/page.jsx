import Tibia84SeasonalServerListKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalServerListKeywordPage />;
}
