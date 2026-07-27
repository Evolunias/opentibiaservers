import Blazera86SeasonalServerKeywordPage, { generateMetadata } from './blazera-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera86SeasonalServerKeywordPage />;
}
