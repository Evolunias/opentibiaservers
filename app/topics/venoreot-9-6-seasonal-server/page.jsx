import Venoreot96SeasonalServerKeywordPage, { generateMetadata } from './venoreot-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot96SeasonalServerKeywordPage />;
}
