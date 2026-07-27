import RubinotSeasonalServerGermanyKeywordPage, { generateMetadata } from './rubinot-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotSeasonalServerGermanyKeywordPage />;
}
