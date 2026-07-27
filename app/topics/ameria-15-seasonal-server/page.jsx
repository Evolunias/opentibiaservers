import Ameria15SeasonalServerKeywordPage, { generateMetadata } from './ameria-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15SeasonalServerKeywordPage />;
}
