import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-canada-server');
}

export default function DemolidoresCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-canada-server" />;
}
