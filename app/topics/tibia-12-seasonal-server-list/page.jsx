import Tibia12SeasonalServerListKeywordPage, { generateMetadata } from './tibia-12-seasonal-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalServerListKeywordPage />;
}
