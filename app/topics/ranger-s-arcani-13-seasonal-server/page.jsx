import RangerSArcani13SeasonalServerKeywordPage, { generateMetadata } from './ranger-s-arcani-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcani13SeasonalServerKeywordPage />;
}
