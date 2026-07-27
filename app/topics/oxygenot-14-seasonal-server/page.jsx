import Oxygenot14SeasonalServerKeywordPage, { generateMetadata } from './oxygenot-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot14SeasonalServerKeywordPage />;
}
