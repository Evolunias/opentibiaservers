import Ameria12SeasonalServerKeywordPage, { generateMetadata } from './ameria-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria12SeasonalServerKeywordPage />;
}
