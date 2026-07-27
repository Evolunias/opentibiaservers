import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-server');
}

export default function OfficialRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-server" />;
}
