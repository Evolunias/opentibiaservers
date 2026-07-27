import ArcaniarlSeasonalServerUsaKeywordPage, { generateMetadata } from './arcaniarl-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlSeasonalServerUsaKeywordPage />;
}
