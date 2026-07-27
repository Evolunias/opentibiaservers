import Shadowcores12SeasonalServerKeywordPage, { generateMetadata } from './shadowcores-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores12SeasonalServerKeywordPage />;
}
