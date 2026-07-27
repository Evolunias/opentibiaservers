import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-europe-servers');
}

export default function RubinotEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-europe-servers" />;
}
