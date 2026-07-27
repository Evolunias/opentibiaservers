import AmeriaSeasonalServerEuropeKeywordPage, { generateMetadata } from './ameria-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaSeasonalServerEuropeKeywordPage />;
}
