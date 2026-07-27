import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-launch-argentina');
}

export default function NoResetLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-launch-argentina" />;
}
