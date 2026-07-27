import Tibia84PvpEnforcedClientKeywordPage, { generateMetadata } from './tibia-8-4-pvp-enforced-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpEnforcedClientKeywordPage />;
}
