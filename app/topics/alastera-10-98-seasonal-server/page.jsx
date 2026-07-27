import Alastera1098SeasonalServerKeywordPage, { generateMetadata } from './alastera-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera1098SeasonalServerKeywordPage />;
}
