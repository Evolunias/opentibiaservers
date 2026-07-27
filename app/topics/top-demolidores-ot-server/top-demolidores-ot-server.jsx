import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-ot-server');
}

export default function TopDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-ot-server" />;
}
