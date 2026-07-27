import Neprenia96SeasonalServerKeywordPage, { generateMetadata } from './neprenia-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia96SeasonalServerKeywordPage />;
}
