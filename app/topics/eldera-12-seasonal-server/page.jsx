import Eldera12SeasonalServerKeywordPage, { generateMetadata } from './eldera-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera12SeasonalServerKeywordPage />;
}
