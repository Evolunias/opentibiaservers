import Eldera14SeasonalServerKeywordPage, { generateMetadata } from './eldera-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera14SeasonalServerKeywordPage />;
}
