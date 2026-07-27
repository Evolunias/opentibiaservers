import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot');
}

export default function RubinotKeywordPage() {
  return <StaticKeywordPage slug="rubinot" />;
}
