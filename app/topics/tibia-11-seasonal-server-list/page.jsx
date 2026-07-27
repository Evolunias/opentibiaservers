import Tibia11SeasonalServerListKeywordPage, { generateMetadata } from './tibia-11-seasonal-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalServerListKeywordPage />;
}
