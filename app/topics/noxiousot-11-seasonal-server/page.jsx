import Noxiousot11SeasonalServerKeywordPage, { generateMetadata } from './noxiousot-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot11SeasonalServerKeywordPage />;
}
