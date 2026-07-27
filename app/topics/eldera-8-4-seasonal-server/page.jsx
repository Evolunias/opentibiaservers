import Eldera84SeasonalServerKeywordPage, { generateMetadata } from './eldera-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera84SeasonalServerKeywordPage />;
}
