import Tibia71SeasonalServerListKeywordPage, { generateMetadata } from './tibia-7-1-seasonal-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71SeasonalServerListKeywordPage />;
}
