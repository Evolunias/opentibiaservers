import ShadowcoresSeasonalServerNorthAmericaKeywordPage, { generateMetadata } from './shadowcores-seasonal-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresSeasonalServerNorthAmericaKeywordPage />;
}
