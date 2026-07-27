import ArcaniarlSeasonalServerFranceKeywordPage, { generateMetadata } from './arcaniarl-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlSeasonalServerFranceKeywordPage />;
}
