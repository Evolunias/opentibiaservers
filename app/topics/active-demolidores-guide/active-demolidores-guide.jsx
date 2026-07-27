import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-guide');
}

export default function ActiveDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-guide" />;
}
