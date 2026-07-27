import Tibia11PvpOpenTibiaServerKeywordPage, { generateMetadata } from './tibia-11-pvp-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpOpenTibiaServerKeywordPage />;
}
