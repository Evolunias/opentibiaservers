import Venoreot81SeasonalServerKeywordPage, { generateMetadata } from './venoreot-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot81SeasonalServerKeywordPage />;
}
