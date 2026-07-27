import Venoreot86SeasonalServerKeywordPage, { generateMetadata } from './venoreot-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot86SeasonalServerKeywordPage />;
}
