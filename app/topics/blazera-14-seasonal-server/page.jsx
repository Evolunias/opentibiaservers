import Blazera14SeasonalServerKeywordPage, { generateMetadata } from './blazera-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera14SeasonalServerKeywordPage />;
}
