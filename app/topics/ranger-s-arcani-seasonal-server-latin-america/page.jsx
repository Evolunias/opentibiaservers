import RangerSArcaniSeasonalServerLatinAmericaKeywordPage, { generateMetadata } from './ranger-s-arcani-seasonal-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniSeasonalServerLatinAmericaKeywordPage />;
}
