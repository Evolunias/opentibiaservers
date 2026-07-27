import RangerSArcani84SeasonalServerKeywordPage, { generateMetadata } from './ranger-s-arcani-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcani84SeasonalServerKeywordPage />;
}
