import Shadowcores11SeasonalServerKeywordPage, { generateMetadata } from './shadowcores-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11SeasonalServerKeywordPage />;
}
