import PvpEnforcedLaunchPolandKeywordPage, { generateMetadata } from './pvp-enforced-launch-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedLaunchPolandKeywordPage />;
}
