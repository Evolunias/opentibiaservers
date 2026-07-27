import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-north-america');
}

export default function NonPvpLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-north-america" />;
}
