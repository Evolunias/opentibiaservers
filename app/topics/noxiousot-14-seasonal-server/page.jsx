import Noxiousot14SeasonalServerKeywordPage, { generateMetadata } from './noxiousot-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot14SeasonalServerKeywordPage />;
}
