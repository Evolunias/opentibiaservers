import Thaisot14SeasonalServerKeywordPage, { generateMetadata } from './thaisot-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14SeasonalServerKeywordPage />;
}
