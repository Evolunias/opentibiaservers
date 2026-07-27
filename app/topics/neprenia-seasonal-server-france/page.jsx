import NepreniaSeasonalServerFranceKeywordPage, { generateMetadata } from './neprenia-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSeasonalServerFranceKeywordPage />;
}
