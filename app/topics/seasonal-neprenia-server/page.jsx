import SeasonalNepreniaServerKeywordPage, { generateMetadata } from './seasonal-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalNepreniaServerKeywordPage />;
}
