import Tibia12PvpEnforcedClientKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedClientKeywordPage />;
}
