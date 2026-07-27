import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-ot');
}

export default function CurrentRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-ot" />;
}
