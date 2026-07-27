import Venoreot76SeasonalServerKeywordPage, { generateMetadata } from './venoreot-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot76SeasonalServerKeywordPage />;
}
