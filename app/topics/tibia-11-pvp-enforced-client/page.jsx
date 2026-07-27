import Tibia11PvpEnforcedClientKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedClientKeywordPage />;
}
