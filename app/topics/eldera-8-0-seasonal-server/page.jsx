import Eldera80SeasonalServerKeywordPage, { generateMetadata } from './eldera-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera80SeasonalServerKeywordPage />;
}
