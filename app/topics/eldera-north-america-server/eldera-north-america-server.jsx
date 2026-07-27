import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-north-america-server');
}

export default function ElderaNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-north-america-server" />;
}
