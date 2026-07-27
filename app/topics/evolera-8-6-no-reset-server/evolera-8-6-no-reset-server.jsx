import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-no-reset-server');
}

export default function Evolera86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-no-reset-server" />;
}
