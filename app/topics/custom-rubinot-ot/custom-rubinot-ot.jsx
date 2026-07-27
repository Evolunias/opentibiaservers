import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-ot');
}

export default function CustomRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-ot" />;
}
