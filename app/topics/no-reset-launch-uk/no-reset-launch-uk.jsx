import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-launch-uk');
}

export default function NoResetLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-launch-uk" />;
}
