import Tibiantis100SeasonalServerKeywordPage, { generateMetadata } from './tibiantis-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis100SeasonalServerKeywordPage />;
}
