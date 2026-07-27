import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-launch-europe');
}

export default function PvpEnforcedLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-launch-europe" />;
}
