import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-launch-mexico');
}

export default function PvpEnforcedLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-launch-mexico" />;
}
