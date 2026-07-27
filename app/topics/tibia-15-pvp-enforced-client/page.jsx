import Tibia15PvpEnforcedClientKeywordPage, { generateMetadata } from './tibia-15-pvp-enforced-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpEnforcedClientKeywordPage />;
}
