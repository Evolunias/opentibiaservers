import Neprenia11SeasonalServerKeywordPage, { generateMetadata } from './neprenia-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia11SeasonalServerKeywordPage />;
}
