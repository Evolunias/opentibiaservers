import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-argentina');
}

export default function NonPvpLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-argentina" />;
}
