import Tibia76PvpEnforcedServerKeywordPage, { generateMetadata } from './tibia-7-6-pvp-enforced-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpEnforcedServerKeywordPage />;
}
