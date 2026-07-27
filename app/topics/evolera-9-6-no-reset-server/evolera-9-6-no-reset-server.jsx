import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-no-reset-server');
}

export default function Evolera96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-no-reset-server" />;
}
