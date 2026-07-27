import Tibia100PvpEnforcedClientKeywordPage, { generateMetadata } from './tibia-10-0-pvp-enforced-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpEnforcedClientKeywordPage />;
}
