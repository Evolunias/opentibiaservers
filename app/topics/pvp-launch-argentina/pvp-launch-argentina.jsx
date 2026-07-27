import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-argentina');
}

export default function PvpLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-argentina" />;
}
