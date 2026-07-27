import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-launch-usa');
}

export default function PvpEnforcedLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-launch-usa" />;
}
