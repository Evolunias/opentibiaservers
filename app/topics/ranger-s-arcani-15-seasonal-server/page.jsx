import RangerSArcani15SeasonalServerKeywordPage, { generateMetadata } from './ranger-s-arcani-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcani15SeasonalServerKeywordPage />;
}
