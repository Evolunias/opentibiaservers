import Tibiantis96SeasonalServerKeywordPage, { generateMetadata } from './tibiantis-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis96SeasonalServerKeywordPage />;
}
