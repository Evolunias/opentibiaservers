import Venoreot11SeasonalServerKeywordPage, { generateMetadata } from './venoreot-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot11SeasonalServerKeywordPage />;
}
