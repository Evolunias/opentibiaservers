import Alastera14SeasonalServerKeywordPage, { generateMetadata } from './alastera-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera14SeasonalServerKeywordPage />;
}
