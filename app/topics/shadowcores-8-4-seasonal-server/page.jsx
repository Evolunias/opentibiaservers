import Shadowcores84SeasonalServerKeywordPage, { generateMetadata } from './shadowcores-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores84SeasonalServerKeywordPage />;
}
