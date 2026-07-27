import Arcaniarl71SeasonalServerKeywordPage, { generateMetadata } from './arcaniarl-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl71SeasonalServerKeywordPage />;
}
