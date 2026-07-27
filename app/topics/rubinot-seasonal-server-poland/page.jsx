import RubinotSeasonalServerPolandKeywordPage, { generateMetadata } from './rubinot-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotSeasonalServerPolandKeywordPage />;
}
