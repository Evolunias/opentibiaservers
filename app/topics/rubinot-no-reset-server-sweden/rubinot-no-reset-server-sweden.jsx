import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-sweden');
}

export default function RubinotNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-sweden" />;
}
