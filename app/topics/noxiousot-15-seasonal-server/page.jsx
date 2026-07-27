import Noxiousot15SeasonalServerKeywordPage, { generateMetadata } from './noxiousot-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot15SeasonalServerKeywordPage />;
}
