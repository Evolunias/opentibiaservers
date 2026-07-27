import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-south-america-server');
}

export default function ElderaSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-south-america-server" />;
}
