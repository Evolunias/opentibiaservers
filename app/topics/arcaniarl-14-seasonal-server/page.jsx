import Arcaniarl14SeasonalServerKeywordPage, { generateMetadata } from './arcaniarl-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl14SeasonalServerKeywordPage />;
}
