import Imperianic14SeasonalServerKeywordPage, { generateMetadata } from './imperianic-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic14SeasonalServerKeywordPage />;
}
