import Tibia81PvpEnforcedClientKeywordPage, { generateMetadata } from './tibia-8-1-pvp-enforced-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpEnforcedClientKeywordPage />;
}
