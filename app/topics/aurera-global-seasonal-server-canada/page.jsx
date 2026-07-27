import AureraGlobalSeasonalServerCanadaKeywordPage, { generateMetadata } from './aurera-global-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalSeasonalServerCanadaKeywordPage />;
}
