import SerenitySeasonalServerEuropeKeywordPage, { generateMetadata } from './serenity-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenitySeasonalServerEuropeKeywordPage />;
}
