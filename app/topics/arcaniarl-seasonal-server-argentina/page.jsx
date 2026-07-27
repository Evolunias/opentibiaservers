import ArcaniarlSeasonalServerArgentinaKeywordPage, { generateMetadata } from './arcaniarl-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlSeasonalServerArgentinaKeywordPage />;
}
