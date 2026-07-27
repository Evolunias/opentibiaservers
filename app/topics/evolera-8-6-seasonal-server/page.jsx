import Evolera86SeasonalServerKeywordPage, { generateMetadata } from './evolera-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera86SeasonalServerKeywordPage />;
}
