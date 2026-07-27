import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-guide');
}

export default function HighrateDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-guide" />;
}
