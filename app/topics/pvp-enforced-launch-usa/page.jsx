import PvpEnforcedLaunchUsaKeywordPage, { generateMetadata } from './pvp-enforced-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedLaunchUsaKeywordPage />;
}
