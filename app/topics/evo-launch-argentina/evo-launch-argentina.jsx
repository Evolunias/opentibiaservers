import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-argentina');
}

export default function EvoLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-argentina" />;
}
