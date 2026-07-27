import TibiascapeSeasonalServerFranceKeywordPage, { generateMetadata } from './tibiascape-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeSeasonalServerFranceKeywordPage />;
}
