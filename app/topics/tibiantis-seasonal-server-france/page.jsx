import TibiantisSeasonalServerFranceKeywordPage, { generateMetadata } from './tibiantis-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisSeasonalServerFranceKeywordPage />;
}
