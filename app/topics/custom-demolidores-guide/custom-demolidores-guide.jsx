import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-guide');
}

export default function CustomDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-guide" />;
}
