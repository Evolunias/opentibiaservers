import Eldera71SeasonalServerKeywordPage, { generateMetadata } from './eldera-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera71SeasonalServerKeywordPage />;
}
