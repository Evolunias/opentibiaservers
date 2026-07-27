import Oldera14SeasonalServerKeywordPage, { generateMetadata } from './oldera-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera14SeasonalServerKeywordPage />;
}
