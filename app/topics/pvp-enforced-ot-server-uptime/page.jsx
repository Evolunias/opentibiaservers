import PvpEnforcedOtServerUptimeKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerUptimeKeywordPage />;
}
