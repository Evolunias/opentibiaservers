import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-guide');
}

export default function FreshStartAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-guide" />;
}
