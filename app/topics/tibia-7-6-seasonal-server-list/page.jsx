import Tibia76SeasonalServerListKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalServerListKeywordPage />;
}
