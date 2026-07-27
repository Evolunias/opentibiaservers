import SeasonalOriginaltibiaServerKeywordPage, { generateMetadata } from './seasonal-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOriginaltibiaServerKeywordPage />;
}
