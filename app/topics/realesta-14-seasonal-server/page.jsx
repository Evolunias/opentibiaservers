import Realesta14SeasonalServerKeywordPage, { generateMetadata } from './realesta-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta14SeasonalServerKeywordPage />;
}
