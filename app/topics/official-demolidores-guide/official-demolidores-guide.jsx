import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-guide');
}

export default function OfficialDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-guide" />;
}
