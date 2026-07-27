import Eldera13SeasonalServerKeywordPage, { generateMetadata } from './eldera-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera13SeasonalServerKeywordPage />;
}
