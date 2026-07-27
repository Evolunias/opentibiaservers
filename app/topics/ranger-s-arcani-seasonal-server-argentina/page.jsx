import RangerSArcaniSeasonalServerArgentinaKeywordPage, { generateMetadata } from './ranger-s-arcani-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniSeasonalServerArgentinaKeywordPage />;
}
