import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-argentina');
}

export default function RubinotNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-argentina" />;
}
