import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-launch-uk');
}

export default function PvpEnforcedLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-launch-uk" />;
}
