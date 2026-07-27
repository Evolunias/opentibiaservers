import Originaltibia11SeasonalServerKeywordPage, { generateMetadata } from './originaltibia-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia11SeasonalServerKeywordPage />;
}
