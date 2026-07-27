import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-launch-germany');
}

export default function NoResetLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-launch-germany" />;
}
