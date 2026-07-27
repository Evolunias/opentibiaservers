import Shadowcores15SeasonalServerKeywordPage, { generateMetadata } from './shadowcores-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores15SeasonalServerKeywordPage />;
}
