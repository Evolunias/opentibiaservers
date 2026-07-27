import Ameria71SeasonalServerKeywordPage, { generateMetadata } from './ameria-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria71SeasonalServerKeywordPage />;
}
