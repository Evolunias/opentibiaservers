import NepreniaSeasonalServerUsaKeywordPage, { generateMetadata } from './neprenia-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSeasonalServerUsaKeywordPage />;
}
