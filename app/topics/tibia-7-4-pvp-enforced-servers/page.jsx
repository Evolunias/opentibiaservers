import Tibia74PvpEnforcedServersKeywordPage, { generateMetadata } from './tibia-7-4-pvp-enforced-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpEnforcedServersKeywordPage />;
}
