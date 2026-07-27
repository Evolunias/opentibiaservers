import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-usa');
}

export default function NonPvpLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-usa" />;
}
