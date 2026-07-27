import Neprenia13SeasonalServerKeywordPage, { generateMetadata } from './neprenia-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia13SeasonalServerKeywordPage />;
}
