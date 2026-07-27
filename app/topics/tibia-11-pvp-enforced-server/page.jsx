import Tibia11PvpEnforcedServerKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedServerKeywordPage />;
}
