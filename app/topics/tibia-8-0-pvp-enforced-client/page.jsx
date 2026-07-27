import Tibia80PvpEnforcedClientKeywordPage, { generateMetadata } from './tibia-8-0-pvp-enforced-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpEnforcedClientKeywordPage />;
}
