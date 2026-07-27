import Venoreot100SeasonalServerKeywordPage, { generateMetadata } from './venoreot-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot100SeasonalServerKeywordPage />;
}
