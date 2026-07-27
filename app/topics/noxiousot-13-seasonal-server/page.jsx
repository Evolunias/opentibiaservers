import Noxiousot13SeasonalServerKeywordPage, { generateMetadata } from './noxiousot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot13SeasonalServerKeywordPage />;
}
