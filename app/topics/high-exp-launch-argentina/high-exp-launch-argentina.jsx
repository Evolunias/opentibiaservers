import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-argentina');
}

export default function HighExpLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-argentina" />;
}
