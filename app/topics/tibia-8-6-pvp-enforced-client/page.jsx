import Tibia86PvpEnforcedClientKeywordPage, { generateMetadata } from './tibia-8-6-pvp-enforced-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpEnforcedClientKeywordPage />;
}
