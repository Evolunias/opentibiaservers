import Tibia71PvpEnforcedClientKeywordPage, { generateMetadata } from './tibia-7-1-pvp-enforced-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpEnforcedClientKeywordPage />;
}
