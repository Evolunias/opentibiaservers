import NepreniaSeasonalServerBrazilKeywordPage, { generateMetadata } from './neprenia-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSeasonalServerBrazilKeywordPage />;
}
