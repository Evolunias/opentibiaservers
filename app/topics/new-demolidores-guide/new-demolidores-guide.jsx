import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-guide');
}

export default function NewDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-guide" />;
}
