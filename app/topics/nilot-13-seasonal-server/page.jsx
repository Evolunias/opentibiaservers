import Nilot13SeasonalServerKeywordPage, { generateMetadata } from './nilot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot13SeasonalServerKeywordPage />;
}
