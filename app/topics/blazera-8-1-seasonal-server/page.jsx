import Blazera81SeasonalServerKeywordPage, { generateMetadata } from './blazera-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera81SeasonalServerKeywordPage />;
}
