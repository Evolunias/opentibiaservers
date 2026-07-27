import TibiameSeasonalServerFranceKeywordPage, { generateMetadata } from './tibiame-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameSeasonalServerFranceKeywordPage />;
}
