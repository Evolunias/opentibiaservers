import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-launch-poland');
}

export default function PvpEnforcedLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-launch-poland" />;
}
