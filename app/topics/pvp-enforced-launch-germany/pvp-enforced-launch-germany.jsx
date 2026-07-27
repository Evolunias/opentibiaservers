import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-launch-germany');
}

export default function PvpEnforcedLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-launch-germany" />;
}
