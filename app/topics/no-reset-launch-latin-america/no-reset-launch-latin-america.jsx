import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-launch-latin-america');
}

export default function NoResetLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-launch-latin-america" />;
}
