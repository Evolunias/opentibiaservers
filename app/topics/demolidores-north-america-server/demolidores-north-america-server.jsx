import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-north-america-server');
}

export default function DemolidoresNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-north-america-server" />;
}
