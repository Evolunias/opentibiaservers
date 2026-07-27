import AureraGlobalSeasonalServerEuropeKeywordPage, { generateMetadata } from './aurera-global-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalSeasonalServerEuropeKeywordPage />;
}
