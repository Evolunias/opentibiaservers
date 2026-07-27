import Tibia15SeasonalServerListKeywordPage, { generateMetadata } from './tibia-15-seasonal-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalServerListKeywordPage />;
}
