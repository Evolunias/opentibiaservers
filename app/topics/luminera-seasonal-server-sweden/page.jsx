import LumineraSeasonalServerSwedenKeywordPage, { generateMetadata } from './luminera-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraSeasonalServerSwedenKeywordPage />;
}
