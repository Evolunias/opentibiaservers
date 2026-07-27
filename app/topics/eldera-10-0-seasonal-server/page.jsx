import Eldera100SeasonalServerKeywordPage, { generateMetadata } from './eldera-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera100SeasonalServerKeywordPage />;
}
