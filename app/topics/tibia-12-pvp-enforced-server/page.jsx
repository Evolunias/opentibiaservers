import Tibia12PvpEnforcedServerKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedServerKeywordPage />;
}
