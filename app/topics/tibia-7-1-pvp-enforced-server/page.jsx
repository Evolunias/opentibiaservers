import Tibia71PvpEnforcedServerKeywordPage, { generateMetadata } from './tibia-7-1-pvp-enforced-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpEnforcedServerKeywordPage />;
}
