import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-ots');
}

export default function RubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="rubinot-ots" />;
}
