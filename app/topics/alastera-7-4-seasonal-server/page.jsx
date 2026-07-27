import Alastera74SeasonalServerKeywordPage, { generateMetadata } from './alastera-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera74SeasonalServerKeywordPage />;
}
