import SeasonalTibiaPrivateServerEuropeKeywordPage, { generateMetadata } from './seasonal-tibia-private-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalTibiaPrivateServerEuropeKeywordPage />;
}
