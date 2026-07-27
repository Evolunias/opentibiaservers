import AmeriaSeasonalServerGermanyKeywordPage, { generateMetadata } from './ameria-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaSeasonalServerGermanyKeywordPage />;
}
