import Tibianus14SeasonalServerKeywordPage, { generateMetadata } from './tibianus-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus14SeasonalServerKeywordPage />;
}
