import PvpEnforcedLaunchUkKeywordPage, { generateMetadata } from './pvp-enforced-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedLaunchUkKeywordPage />;
}
