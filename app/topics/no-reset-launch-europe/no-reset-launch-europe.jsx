import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-launch-europe');
}

export default function NoResetLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-launch-europe" />;
}
