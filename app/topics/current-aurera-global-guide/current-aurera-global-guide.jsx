import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-guide');
}

export default function CurrentAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-guide" />;
}
