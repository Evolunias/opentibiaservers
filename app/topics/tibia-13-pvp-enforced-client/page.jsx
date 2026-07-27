import Tibia13PvpEnforcedClientKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedClientKeywordPage />;
}
