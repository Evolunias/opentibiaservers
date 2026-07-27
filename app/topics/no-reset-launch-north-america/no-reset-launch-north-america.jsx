import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-launch-north-america');
}

export default function NoResetLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-launch-north-america" />;
}
