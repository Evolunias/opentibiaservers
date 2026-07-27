import RubinotSeasonalServerArgentinaKeywordPage, { generateMetadata } from './rubinot-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotSeasonalServerArgentinaKeywordPage />;
}
