import Shadowcores13SeasonalServerKeywordPage, { generateMetadata } from './shadowcores-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores13SeasonalServerKeywordPage />;
}
