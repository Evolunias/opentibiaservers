import Nilot80SeasonalServerKeywordPage, { generateMetadata } from './nilot-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot80SeasonalServerKeywordPage />;
}
