import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-north-america-servers');
}

export default function ElderaNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-north-america-servers" />;
}
