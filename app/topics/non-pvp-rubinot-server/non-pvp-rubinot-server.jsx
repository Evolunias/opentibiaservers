import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-rubinot-server');
}

export default function NonPvpRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-rubinot-server" />;
}
