import Neprenia15SeasonalServerKeywordPage, { generateMetadata } from './neprenia-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia15SeasonalServerKeywordPage />;
}
