import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-ot-server');
}

export default function OfficialRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-ot-server" />;
}
