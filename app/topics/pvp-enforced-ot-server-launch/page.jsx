import PvpEnforcedOtServerLaunchKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerLaunchKeywordPage />;
}
