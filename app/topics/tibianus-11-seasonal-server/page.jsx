import Tibianus11SeasonalServerKeywordPage, { generateMetadata } from './tibianus-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus11SeasonalServerKeywordPage />;
}
