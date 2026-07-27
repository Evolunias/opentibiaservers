import Evolera14SeasonalServerKeywordPage, { generateMetadata } from './evolera-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera14SeasonalServerKeywordPage />;
}
