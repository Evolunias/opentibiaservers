import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-guide');
}

export default function PopularAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-guide" />;
}
