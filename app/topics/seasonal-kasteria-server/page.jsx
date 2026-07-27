import SeasonalKasteriaServerKeywordPage, { generateMetadata } from './seasonal-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalKasteriaServerKeywordPage />;
}
