import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-launch-latin-america');
}

export default function PvpEnforcedLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-launch-latin-america" />;
}
