import AureraGlobalSeasonalServerUkKeywordPage, { generateMetadata } from './aurera-global-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalSeasonalServerUkKeywordPage />;
}
