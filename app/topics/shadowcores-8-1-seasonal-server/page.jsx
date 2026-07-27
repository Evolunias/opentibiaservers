import Shadowcores81SeasonalServerKeywordPage, { generateMetadata } from './shadowcores-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores81SeasonalServerKeywordPage />;
}
