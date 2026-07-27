import Tibia14PvpEnforcedClientKeywordPage, { generateMetadata } from './tibia-14-pvp-enforced-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpEnforcedClientKeywordPage />;
}
