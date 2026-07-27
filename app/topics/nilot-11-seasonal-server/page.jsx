import Nilot11SeasonalServerKeywordPage, { generateMetadata } from './nilot-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot11SeasonalServerKeywordPage />;
}
