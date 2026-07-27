import RangerSArcani96SeasonalServerKeywordPage, { generateMetadata } from './ranger-s-arcani-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcani96SeasonalServerKeywordPage />;
}
