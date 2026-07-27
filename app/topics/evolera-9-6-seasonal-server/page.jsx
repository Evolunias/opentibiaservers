import Evolera96SeasonalServerKeywordPage, { generateMetadata } from './evolera-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera96SeasonalServerKeywordPage />;
}
