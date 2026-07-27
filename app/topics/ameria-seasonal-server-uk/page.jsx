import AmeriaSeasonalServerUkKeywordPage, { generateMetadata } from './ameria-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaSeasonalServerUkKeywordPage />;
}
