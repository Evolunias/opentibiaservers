import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-launch-poland');
}

export default function NoResetLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-launch-poland" />;
}
