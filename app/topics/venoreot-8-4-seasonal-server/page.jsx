import Venoreot84SeasonalServerKeywordPage, { generateMetadata } from './venoreot-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot84SeasonalServerKeywordPage />;
}
