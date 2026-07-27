import PvpTibiaPrivateServerSouthAmericaKeywordPage, { generateMetadata } from './pvp-tibia-private-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibiaPrivateServerSouthAmericaKeywordPage />;
}
