import ShadowcoresSeasonalServerFranceKeywordPage, { generateMetadata } from './shadowcores-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresSeasonalServerFranceKeywordPage />;
}
