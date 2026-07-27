import Tibia96PvpEnforcedServerKeywordPage, { generateMetadata } from './tibia-9-6-pvp-enforced-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpEnforcedServerKeywordPage />;
}
