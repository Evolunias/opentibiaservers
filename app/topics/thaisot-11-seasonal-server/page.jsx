import Thaisot11SeasonalServerKeywordPage, { generateMetadata } from './thaisot-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11SeasonalServerKeywordPage />;
}
