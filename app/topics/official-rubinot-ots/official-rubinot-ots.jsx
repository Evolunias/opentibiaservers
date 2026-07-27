import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-ots');
}

export default function OfficialRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-ots" />;
}
