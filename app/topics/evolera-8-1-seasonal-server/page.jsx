import Evolera81SeasonalServerKeywordPage, { generateMetadata } from './evolera-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera81SeasonalServerKeywordPage />;
}
