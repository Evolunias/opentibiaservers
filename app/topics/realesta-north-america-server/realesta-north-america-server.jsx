import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-north-america-server');
}

export default function RealestaNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-north-america-server" />;
}
