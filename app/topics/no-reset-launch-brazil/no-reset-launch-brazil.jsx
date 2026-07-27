import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-launch-brazil');
}

export default function NoResetLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-launch-brazil" />;
}
