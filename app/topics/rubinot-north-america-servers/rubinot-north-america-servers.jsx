import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-north-america-servers');
}

export default function RubinotNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-north-america-servers" />;
}
