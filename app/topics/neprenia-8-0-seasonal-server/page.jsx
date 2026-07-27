import Neprenia80SeasonalServerKeywordPage, { generateMetadata } from './neprenia-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia80SeasonalServerKeywordPage />;
}
