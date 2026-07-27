import SeasonalOpenTibiaServerEuropeKeywordPage, { generateMetadata } from './seasonal-open-tibia-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOpenTibiaServerEuropeKeywordPage />;
}
