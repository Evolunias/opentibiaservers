import Nilot81SeasonalServerKeywordPage, { generateMetadata } from './nilot-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot81SeasonalServerKeywordPage />;
}
