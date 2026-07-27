import Tibiantis71SeasonalServerKeywordPage, { generateMetadata } from './tibiantis-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis71SeasonalServerKeywordPage />;
}
