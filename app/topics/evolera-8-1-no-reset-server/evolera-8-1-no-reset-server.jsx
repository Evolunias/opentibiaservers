import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-1-no-reset-server');
}

export default function Evolera81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-1-no-reset-server" />;
}
