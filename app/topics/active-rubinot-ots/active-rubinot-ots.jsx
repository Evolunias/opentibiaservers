import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-ots');
}

export default function ActiveRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-ots" />;
}
