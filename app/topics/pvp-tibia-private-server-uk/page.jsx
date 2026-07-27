import PvpTibiaPrivateServerUkKeywordPage, { generateMetadata } from './pvp-tibia-private-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibiaPrivateServerUkKeywordPage />;
}
