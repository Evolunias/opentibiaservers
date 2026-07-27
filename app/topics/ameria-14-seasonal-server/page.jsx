import Ameria14SeasonalServerKeywordPage, { generateMetadata } from './ameria-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria14SeasonalServerKeywordPage />;
}
