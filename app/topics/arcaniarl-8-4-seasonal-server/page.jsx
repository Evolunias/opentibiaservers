import Arcaniarl84SeasonalServerKeywordPage, { generateMetadata } from './arcaniarl-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl84SeasonalServerKeywordPage />;
}
