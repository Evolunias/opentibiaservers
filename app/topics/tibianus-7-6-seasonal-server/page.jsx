import Tibianus76SeasonalServerKeywordPage, { generateMetadata } from './tibianus-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus76SeasonalServerKeywordPage />;
}
