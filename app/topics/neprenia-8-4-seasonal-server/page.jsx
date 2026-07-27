import Neprenia84SeasonalServerKeywordPage, { generateMetadata } from './neprenia-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia84SeasonalServerKeywordPage />;
}
