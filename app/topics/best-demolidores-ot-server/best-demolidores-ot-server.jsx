import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-ot-server');
}

export default function BestDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-ot-server" />;
}
