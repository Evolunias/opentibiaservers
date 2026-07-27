import DemolidoresSeasonalServerSwedenKeywordPage, { generateMetadata } from './demolidores-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresSeasonalServerSwedenKeywordPage />;
}
