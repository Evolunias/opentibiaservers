import Tibianus84SeasonalServerKeywordPage, { generateMetadata } from './tibianus-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus84SeasonalServerKeywordPage />;
}
