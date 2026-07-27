import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-brazil');
}

export default function NonPvpLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-brazil" />;
}
