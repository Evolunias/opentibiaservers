import RubinotSeasonalServerBrazilKeywordPage, { generateMetadata } from './rubinot-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotSeasonalServerBrazilKeywordPage />;
}
