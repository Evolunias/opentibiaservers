import AlasteraSeasonalServerSwedenKeywordPage, { generateMetadata } from './alastera-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraSeasonalServerSwedenKeywordPage />;
}
