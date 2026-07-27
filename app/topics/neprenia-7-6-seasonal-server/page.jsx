import Neprenia76SeasonalServerKeywordPage, { generateMetadata } from './neprenia-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia76SeasonalServerKeywordPage />;
}
