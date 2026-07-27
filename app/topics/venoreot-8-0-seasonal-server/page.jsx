import Venoreot80SeasonalServerKeywordPage, { generateMetadata } from './venoreot-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot80SeasonalServerKeywordPage />;
}
