import Venoreot71SeasonalServerKeywordPage, { generateMetadata } from './venoreot-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot71SeasonalServerKeywordPage />;
}
