import Tibia96PvpEnforcedClientKeywordPage, { generateMetadata } from './tibia-9-6-pvp-enforced-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpEnforcedClientKeywordPage />;
}
