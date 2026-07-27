import Nilot86SeasonalServerKeywordPage, { generateMetadata } from './nilot-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot86SeasonalServerKeywordPage />;
}
