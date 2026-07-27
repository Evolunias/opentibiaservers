import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-demolidores-server');
}

export default function HighExpDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-demolidores-server" />;
}
