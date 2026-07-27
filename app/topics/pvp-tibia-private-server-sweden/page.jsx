import PvpTibiaPrivateServerSwedenKeywordPage, { generateMetadata } from './pvp-tibia-private-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibiaPrivateServerSwedenKeywordPage />;
}
