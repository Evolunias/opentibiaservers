import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-guide');
}

export default function NoResetDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-guide" />;
}
