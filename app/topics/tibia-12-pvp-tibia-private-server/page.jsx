import Tibia12PvpTibiaPrivateServerKeywordPage, { generateMetadata } from './tibia-12-pvp-tibia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpTibiaPrivateServerKeywordPage />;
}
