import Tibia76PvpEnforcedClientKeywordPage, { generateMetadata } from './tibia-7-6-pvp-enforced-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpEnforcedClientKeywordPage />;
}
