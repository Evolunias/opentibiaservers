import Nilot71SeasonalServerKeywordPage, { generateMetadata } from './nilot-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot71SeasonalServerKeywordPage />;
}
