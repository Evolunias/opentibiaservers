import ShadowcoresSeasonalServerArgentinaKeywordPage, { generateMetadata } from './shadowcores-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresSeasonalServerArgentinaKeywordPage />;
}
