import Tibianus86SeasonalServerKeywordPage, { generateMetadata } from './tibianus-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus86SeasonalServerKeywordPage />;
}
