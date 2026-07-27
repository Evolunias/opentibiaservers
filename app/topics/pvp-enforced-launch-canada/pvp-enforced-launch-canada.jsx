import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-launch-canada');
}

export default function PvpEnforcedLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-launch-canada" />;
}
