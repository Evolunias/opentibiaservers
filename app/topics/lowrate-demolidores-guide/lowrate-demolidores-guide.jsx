import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-guide');
}

export default function LowrateDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-guide" />;
}
