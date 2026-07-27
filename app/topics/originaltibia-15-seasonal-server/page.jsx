import Originaltibia15SeasonalServerKeywordPage, { generateMetadata } from './originaltibia-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia15SeasonalServerKeywordPage />;
}
