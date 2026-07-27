import Originaltibia14SeasonalServerKeywordPage, { generateMetadata } from './originaltibia-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia14SeasonalServerKeywordPage />;
}
