import Tibiantis13SeasonalServerKeywordPage, { generateMetadata } from './tibiantis-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis13SeasonalServerKeywordPage />;
}
