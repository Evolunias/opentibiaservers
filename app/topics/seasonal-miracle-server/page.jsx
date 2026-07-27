import SeasonalMiracleServerKeywordPage, { generateMetadata } from './seasonal-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalMiracleServerKeywordPage />;
}
