import PvpTibiaPrivateServerEuropeKeywordPage, { generateMetadata } from './pvp-tibia-private-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibiaPrivateServerEuropeKeywordPage />;
}
