import Nilot12SeasonalServerKeywordPage, { generateMetadata } from './nilot-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot12SeasonalServerKeywordPage />;
}
