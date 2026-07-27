import TibiantisSeasonalServerCanadaKeywordPage, { generateMetadata } from './tibiantis-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisSeasonalServerCanadaKeywordPage />;
}
