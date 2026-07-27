import Shadowcores96SeasonalServerKeywordPage, { generateMetadata } from './shadowcores-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores96SeasonalServerKeywordPage />;
}
