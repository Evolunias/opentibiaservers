import Alastera76SeasonalServerKeywordPage, { generateMetadata } from './alastera-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera76SeasonalServerKeywordPage />;
}
