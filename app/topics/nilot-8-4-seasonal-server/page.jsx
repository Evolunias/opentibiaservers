import Nilot84SeasonalServerKeywordPage, { generateMetadata } from './nilot-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot84SeasonalServerKeywordPage />;
}
