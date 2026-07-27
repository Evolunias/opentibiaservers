import RangerSArcaniSeasonalServerUsaKeywordPage, { generateMetadata } from './ranger-s-arcani-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniSeasonalServerUsaKeywordPage />;
}
