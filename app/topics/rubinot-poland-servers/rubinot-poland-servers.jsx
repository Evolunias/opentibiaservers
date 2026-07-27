import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-poland-servers');
}

export default function RubinotPolandServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-poland-servers" />;
}
