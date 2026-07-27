import Neprenia74SeasonalServerKeywordPage, { generateMetadata } from './neprenia-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia74SeasonalServerKeywordPage />;
}
