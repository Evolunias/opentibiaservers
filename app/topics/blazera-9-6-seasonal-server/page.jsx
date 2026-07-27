import Blazera96SeasonalServerKeywordPage, { generateMetadata } from './blazera-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera96SeasonalServerKeywordPage />;
}
