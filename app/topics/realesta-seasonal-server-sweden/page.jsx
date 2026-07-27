import RealestaSeasonalServerSwedenKeywordPage, { generateMetadata } from './realesta-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaSeasonalServerSwedenKeywordPage />;
}
