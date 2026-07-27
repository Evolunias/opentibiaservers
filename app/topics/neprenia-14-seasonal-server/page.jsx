import Neprenia14SeasonalServerKeywordPage, { generateMetadata } from './neprenia-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia14SeasonalServerKeywordPage />;
}
