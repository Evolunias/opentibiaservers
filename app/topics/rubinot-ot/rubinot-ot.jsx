import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-ot');
}

export default function RubinotOtKeywordPage() {
  return <StaticKeywordPage slug="rubinot-ot" />;
}
