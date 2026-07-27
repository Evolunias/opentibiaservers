import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-argentina');
}

export default function FreshStartLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-argentina" />;
}
