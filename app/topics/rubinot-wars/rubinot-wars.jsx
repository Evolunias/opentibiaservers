import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-wars');
}

export default function RubinotWarsKeywordPage() {
  return <StaticKeywordPage slug="rubinot-wars" />;
}
