import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-ot');
}

export default function LowrateRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-ot" />;
}
