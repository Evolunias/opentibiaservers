import RangerSArcani100SeasonalServerKeywordPage, { generateMetadata } from './ranger-s-arcani-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcani100SeasonalServerKeywordPage />;
}
