import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-launch-mexico');
}

export default function NoResetLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-launch-mexico" />;
}
