import Blazera11SeasonalServerKeywordPage, { generateMetadata } from './blazera-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera11SeasonalServerKeywordPage />;
}
