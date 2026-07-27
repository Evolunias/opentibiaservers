import Noxiousot12SeasonalServerKeywordPage, { generateMetadata } from './noxiousot-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot12SeasonalServerKeywordPage />;
}
