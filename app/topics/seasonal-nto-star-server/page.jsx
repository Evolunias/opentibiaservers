import SeasonalNtoStarServerKeywordPage, { generateMetadata } from './seasonal-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalNtoStarServerKeywordPage />;
}
