import Blazera76SeasonalServerKeywordPage, { generateMetadata } from './blazera-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera76SeasonalServerKeywordPage />;
}
