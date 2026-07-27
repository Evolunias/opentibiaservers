import PvpEnforcedLaunchCanadaKeywordPage, { generateMetadata } from './pvp-enforced-launch-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedLaunchCanadaKeywordPage />;
}
