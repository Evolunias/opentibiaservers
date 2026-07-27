import TibiantisSeasonalServerUkKeywordPage, { generateMetadata } from './tibiantis-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisSeasonalServerUkKeywordPage />;
}
