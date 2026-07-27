import Tibianus12SeasonalServerKeywordPage, { generateMetadata } from './tibianus-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus12SeasonalServerKeywordPage />;
}
