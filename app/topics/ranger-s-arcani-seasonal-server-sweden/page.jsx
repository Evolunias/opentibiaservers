import RangerSArcaniSeasonalServerSwedenKeywordPage, { generateMetadata } from './ranger-s-arcani-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniSeasonalServerSwedenKeywordPage />;
}
