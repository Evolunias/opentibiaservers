import Kasteria14SeasonalServerKeywordPage, { generateMetadata } from './kasteria-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria14SeasonalServerKeywordPage />;
}
