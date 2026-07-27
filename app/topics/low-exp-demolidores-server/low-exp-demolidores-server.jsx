import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-demolidores-server');
}

export default function LowExpDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-demolidores-server" />;
}
