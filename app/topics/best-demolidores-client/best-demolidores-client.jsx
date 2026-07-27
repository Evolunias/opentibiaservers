import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-client');
}

export default function BestDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-client" />;
}
