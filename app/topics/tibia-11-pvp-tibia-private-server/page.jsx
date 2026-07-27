import Tibia11PvpTibiaPrivateServerKeywordPage, { generateMetadata } from './tibia-11-pvp-tibia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpTibiaPrivateServerKeywordPage />;
}
