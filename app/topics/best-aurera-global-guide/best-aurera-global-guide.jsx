import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-guide');
}

export default function BestAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-guide" />;
}
