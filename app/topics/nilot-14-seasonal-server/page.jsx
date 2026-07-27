import Nilot14SeasonalServerKeywordPage, { generateMetadata } from './nilot-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot14SeasonalServerKeywordPage />;
}
