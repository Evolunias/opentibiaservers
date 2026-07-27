import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-guide');
}

export default function AureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-guide" />;
}
