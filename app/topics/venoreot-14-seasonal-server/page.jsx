import Venoreot14SeasonalServerKeywordPage, { generateMetadata } from './venoreot-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14SeasonalServerKeywordPage />;
}
