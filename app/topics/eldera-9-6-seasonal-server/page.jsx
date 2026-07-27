import Eldera96SeasonalServerKeywordPage, { generateMetadata } from './eldera-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera96SeasonalServerKeywordPage />;
}
