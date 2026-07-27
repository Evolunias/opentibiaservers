import Eldera74SeasonalServerKeywordPage, { generateMetadata } from './eldera-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera74SeasonalServerKeywordPage />;
}
