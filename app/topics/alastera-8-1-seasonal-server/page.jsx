import Alastera81SeasonalServerKeywordPage, { generateMetadata } from './alastera-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera81SeasonalServerKeywordPage />;
}
