import NepreniaSeasonalServerMexicoKeywordPage, { generateMetadata } from './neprenia-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSeasonalServerMexicoKeywordPage />;
}
