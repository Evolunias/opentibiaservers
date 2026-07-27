import Originaltibia13SeasonalServerKeywordPage, { generateMetadata } from './originaltibia-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia13SeasonalServerKeywordPage />;
}
