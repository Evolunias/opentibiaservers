import Nilot100SeasonalServerKeywordPage, { generateMetadata } from './nilot-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot100SeasonalServerKeywordPage />;
}
