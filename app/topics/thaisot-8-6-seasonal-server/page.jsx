import Thaisot86SeasonalServerKeywordPage, { generateMetadata } from './thaisot-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot86SeasonalServerKeywordPage />;
}
