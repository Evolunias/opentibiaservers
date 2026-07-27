import Shadowcores14SeasonalServerKeywordPage, { generateMetadata } from './shadowcores-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores14SeasonalServerKeywordPage />;
}
