import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-launch-north-america');
}

export default function PvpEnforcedLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-launch-north-america" />;
}
