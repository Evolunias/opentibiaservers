import Eldera11SeasonalServerKeywordPage, { generateMetadata } from './eldera-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera11SeasonalServerKeywordPage />;
}
