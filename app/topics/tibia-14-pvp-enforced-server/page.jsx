import Tibia14PvpEnforcedServerKeywordPage, { generateMetadata } from './tibia-14-pvp-enforced-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpEnforcedServerKeywordPage />;
}
