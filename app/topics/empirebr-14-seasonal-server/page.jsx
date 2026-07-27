import Empirebr14SeasonalServerKeywordPage, { generateMetadata } from './empirebr-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Empirebr14SeasonalServerKeywordPage />;
}
