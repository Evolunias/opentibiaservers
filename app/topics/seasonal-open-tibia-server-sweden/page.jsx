import SeasonalOpenTibiaServerSwedenKeywordPage, { generateMetadata } from './seasonal-open-tibia-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOpenTibiaServerSwedenKeywordPage />;
}
