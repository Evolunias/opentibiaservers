import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-canada');
}

export default function NonPvpLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-canada" />;
}
