import Eldera76SeasonalServerKeywordPage, { generateMetadata } from './eldera-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera76SeasonalServerKeywordPage />;
}
