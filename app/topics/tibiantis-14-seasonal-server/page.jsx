import Tibiantis14SeasonalServerKeywordPage, { generateMetadata } from './tibiantis-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis14SeasonalServerKeywordPage />;
}
