import Shadowcores100SeasonalServerKeywordPage, { generateMetadata } from './shadowcores-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores100SeasonalServerKeywordPage />;
}
