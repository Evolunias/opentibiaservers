import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-no-reset-server');
}

export default function Evolera12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-no-reset-server" />;
}
