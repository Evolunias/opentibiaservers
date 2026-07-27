import Neprenia71SeasonalServerKeywordPage, { generateMetadata } from './neprenia-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia71SeasonalServerKeywordPage />;
}
