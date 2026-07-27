import Tibia1098SeasonalServerListKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalServerListKeywordPage />;
}
