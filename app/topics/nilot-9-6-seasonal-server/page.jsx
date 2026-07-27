import Nilot96SeasonalServerKeywordPage, { generateMetadata } from './nilot-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot96SeasonalServerKeywordPage />;
}
