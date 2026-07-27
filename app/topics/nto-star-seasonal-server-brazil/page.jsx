import NtoStarSeasonalServerBrazilKeywordPage, { generateMetadata } from './nto-star-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSeasonalServerBrazilKeywordPage />;
}
