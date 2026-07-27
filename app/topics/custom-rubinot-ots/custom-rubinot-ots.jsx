import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-ots');
}

export default function CustomRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-ots" />;
}
