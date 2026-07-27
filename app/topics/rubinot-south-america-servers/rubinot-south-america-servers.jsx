import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-south-america-servers');
}

export default function RubinotSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-south-america-servers" />;
}
