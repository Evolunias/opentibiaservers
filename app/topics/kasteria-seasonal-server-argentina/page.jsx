import KasteriaSeasonalServerArgentinaKeywordPage, { generateMetadata } from './kasteria-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaSeasonalServerArgentinaKeywordPage />;
}
