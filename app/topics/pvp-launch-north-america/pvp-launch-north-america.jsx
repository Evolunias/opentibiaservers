import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-north-america');
}

export default function PvpLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-north-america" />;
}
