import RubinotSeasonalServerFranceKeywordPage, { generateMetadata } from './rubinot-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotSeasonalServerFranceKeywordPage />;
}
