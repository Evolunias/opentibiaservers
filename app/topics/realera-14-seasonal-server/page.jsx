import Realera14SeasonalServerKeywordPage, { generateMetadata } from './realera-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera14SeasonalServerKeywordPage />;
}
