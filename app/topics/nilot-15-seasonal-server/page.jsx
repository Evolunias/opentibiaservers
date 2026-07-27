import Nilot15SeasonalServerKeywordPage, { generateMetadata } from './nilot-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot15SeasonalServerKeywordPage />;
}
