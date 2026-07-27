import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-launch-argentina');
}

export default function LowExpLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-launch-argentina" />;
}
