import Evolera11SeasonalServerKeywordPage, { generateMetadata } from './evolera-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera11SeasonalServerKeywordPage />;
}
