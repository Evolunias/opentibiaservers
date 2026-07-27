import AmeriaSeasonalServerSwedenKeywordPage, { generateMetadata } from './ameria-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaSeasonalServerSwedenKeywordPage />;
}
