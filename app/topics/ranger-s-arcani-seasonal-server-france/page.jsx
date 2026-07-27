import RangerSArcaniSeasonalServerFranceKeywordPage, { generateMetadata } from './ranger-s-arcani-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniSeasonalServerFranceKeywordPage />;
}
