import RangerSArcani11SeasonalServerKeywordPage, { generateMetadata } from './ranger-s-arcani-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcani11SeasonalServerKeywordPage />;
}
