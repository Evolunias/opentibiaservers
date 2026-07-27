import Medivia14SeasonalServerKeywordPage, { generateMetadata } from './medivia-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia14SeasonalServerKeywordPage />;
}
